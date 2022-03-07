<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Traits\ResultResponse;
use DB;

class RegisterController extends Controller
{
    use ResultResponse;

    /**
     * Title of the request
     * @var string
     */
    protected $title = 'User Registration';

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request) {
        DB::beginTransaction();
        $validated = $request->validate([
            'name'      => 'required',
            'email'     => 'required|email|unique:users',
            'password'  => 'required|min:8|confirmed'
        ]);
        try {

            $user = User::create([
                'name'      => $validated['name'],
                'email'     => $validated['email'],
                'password'  => Hash::make($validated['password'])
            ]);

            DB::commit();
            return $this->successResponse($this->title, 'User registered', [$user]);

        } catch (\Exception $e) {
            DB::rollback();
            return $this->errorResponse($this->title, $e->getMessage(), []);
        }
    }
}
