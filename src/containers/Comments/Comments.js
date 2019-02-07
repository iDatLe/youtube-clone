import React from 'react';
import './Comments.scss';
import { CommentsHeader } from './CommentsHeader/CommentsHeader';
import { AddComment } from './AddComment/AddComment';

export function Comments() {
    return (
        <div>
            <CommentsHeader 
            // amountComments={amountComments}/>
            />
            <AddComment />
        </div>
    )
}