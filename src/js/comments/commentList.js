import { COMMENT_DATA } from './constants';
import commentNode from './commentNode';



export default function CommentList() {
    //comments container
    const commentDiv = document.querySelector('.comment-list');

    // comment node list
    COMMENT_DATA.map(elem =>
        commentDiv.append(commentNode(elem))
    );
}
