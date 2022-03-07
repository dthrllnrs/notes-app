<?php

namespace App\Http\Controllers\Api\Notes;

use App\Http\Controllers\Controller;
use App\Repositories\INotesRepository;
use Illuminate\Http\Request;
use App\Traits\ResultResponse;
use App\Models\Note;

class NotesController extends Controller
{
    use ResultResponse;

    protected $notesRepository;

    /**
     * Initiate the Notes Controller class
     *
     * @param INotesRepository $notesRepository
     */
    public function __construct(INotesRepository $notesRepository) {
        $this->notesRepository = $notesRepository;
    }

    /**
     * Create a new note
     *
     * @param Request $request
     * @return Response
     */
    public function create(Request $request) {

        $title = 'Create Note';

        $validated = $request->validate([
            'title'     => 'sometimes|max:20',
            'content'   => 'required'
        ]);

        try {


            $this->notesRepository->create($validated, $request->user());

            return $this->successResponse($title, 'Note created', []);

        } catch (\Exception $e) {
            return $this->errorResponse($title, $e->getMessage(), []);
        }
    }

    /**
     * Update existing note
     *
     * @param Request $request
     * @param Note $note
     * @return Response
     */
    public function update(Request $request, Note $note) {
        $title = 'Update Note';

        $validated = $request->validate([
            'title'     => 'sometimes|max:20',
            'content'   => 'required'
        ]);

        try {
            if($note->owner_id != $request->user()->id) throw('Note is not owned by the user.');

            $this->notesRepository->update($validated, $note);

            return $this->successResponse($title, 'Note updated', []);

        } catch (\Exception $e) {
            return $this->errorResponse($title, $e->getMessage(), []);
        }
    }

    /**
     * Get existing notes of user
     *
     * @param Request $request
     * @return Response
     */
    public function getUserNotes(Request $request) {
        $title = 'Get user notes';

        try {

            $notes = $this->notesRepository->getUserNotes($request->user());

            return $this->successResponse($title, 'success', $notes);

        } catch (\Exception $e) {
            return $this->errorResponse($title, $e->getMessage(), []);
        }
    }

    /**
     * Delete existing note
     *
     * @param Note $note
     * @return Response
     */
    public function delete(Request $request, Note $note) {
        $title = 'Delete note';

        try {

            if($note->owner_id != $request->user()->id) throw('Note is not owned by the user.');

            $notes = $this->notesRepository->delete($note);

            return $this->successResponse($title, 'Note deleted', $notes);

        } catch (\Exception $e) {
            return $this->errorResponse($title, $e->getMessage(), []);
        }

    }
}
