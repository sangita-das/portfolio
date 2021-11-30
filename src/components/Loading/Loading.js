import React from 'react';
import { ScaleLoader} from 'react-spinners';

const Loading = () => {

    return (
        <div className="d-flex justify-content-center align-items-center my-3 py-5">
            <ScaleLoader size={15} />
        </div>

    );
};

export default Loading;