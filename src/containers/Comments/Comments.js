import React from 'react';
import './Comments.scss';
import { CommentsHeader } from './CommentsHeader/CommentsHeader';
import { AddComment } from './AddComment/AddComment';
import { Comment } from './Comment/Comment';

export function Comments() {
    return (
        <div>
            <CommentsHeader 
            // amountComments={amountComments}/>
            />
            <AddComment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}