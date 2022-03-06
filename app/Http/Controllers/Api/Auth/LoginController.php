<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Traits\ResultResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use ResultResponse;

    protected $title = 'User Login';

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request) {

        $title = 'User Login';

        try {
            $validated = $request->validate([
                'email'     => 'required|email',
                'password'  => 'required',
            ]);

            if (!Auth::attempt($validated)) throw new \Exception('Invalid login credentials');

            $user = Auth::user();

            $token = $user->createToken('auth_token')->plainTextToken;

            return $this->successResponse($this->title, '', [
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer'
            ]);

        } catch (\Exception $e) {
            return $this->errorResponse($this->title, $e->getMessage(), null, 500);
        }

    }
}
