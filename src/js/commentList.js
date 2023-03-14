import { COMMENT_DATA } from './constants';
import commentNode  from './commentNode';

export const commentDiv = document.querySelector('.comment-list');//comments container

export default function CommentList() {

    // comment node list
    const comments = COMMENT_DATA.map(elem =>
        commentNode(elem)
    );

    comments.map(comment => commentDiv.append(comment));

}
