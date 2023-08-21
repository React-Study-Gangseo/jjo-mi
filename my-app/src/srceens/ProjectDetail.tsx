import React from 'react';
import { useParams } from 'react-router-dom';

type DetailProps = {
    text:String
};

const ProjectDetail : React.FC<DetailProps> = ({
    text
}):JSX.Element => {
    const params = useParams();
    console.log("params", params, text);
    return (
        <div>
            <h2>project detail 페이지</h2>
        </div>
    )
}
export default ProjectDetail;
