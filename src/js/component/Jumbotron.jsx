import React from "react";

export const Jumbotron = () => {

    return(
        <React.Fragment>
            <div className="mt-1 py-5 ps-3 pe-3 m-auto bg-light" id="Jumbotron">
                <h1 className="display-1">A Warm Welcome!</h1>
                <p className="col-md-8 fs-5 text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cum alias corrupti quos amet impedit reiciendis ab recusandae?</p>
                <button className="btn btn-primary btn-lg"> Call to Action!</button>
            </div>
        </React.Fragment>
    );
}