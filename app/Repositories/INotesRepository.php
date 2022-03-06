<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\Note;

interface INotesRepository {

    public function create(Array $request, User $user);
    public function update(Array $request, Note $note);
    public function getUserNotes(User $user);
    public function delete(Note $note);
}
