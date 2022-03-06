<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\Note;
use DB;

class NotesRepository implements INotesRepository {

    public function create(Array $request, User $user) {
        DB::beginTransaction();
        try {
            $user->notes()->create($request);

            DB::commit();
            return true;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    public function update(Array $request, Note $note) {
        DB::beginTransaction();
        try {
            $note->update($request);

            DB::commit();
            return true;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    public function getUserNotes(User $user) {
        try {
            $notes = $user->notes;
            return $notes;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function delete(Note $note) {
        DB::beginTransaction();
        try {
            $note->delete();

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

}
