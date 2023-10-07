import React from 'react'
import "./skills.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skills() {
    return (
        <>
            <div className="mc2">
                <h1>My Skills</h1>
                <div className="con3">
                    <div className="progress" style={{ height: "30px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "85%"}}
                        >
                            HTML
                        </div>
                    </div>
                    <div className="progress" style={{ height: "30px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%"}}
                        >
                            CSS
                        </div>
                    </div>
                    <div className="progress" style={{ height: "30px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "65%"}}
                        >
                            JavaScript
                        </div>
                    </div>
                    <div className="progress" style={{ height: "30px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%"}}
                        >
                            React
                        </div>
                    </div>
                    <div className="progress" style={{ height: "30px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "65%"}}
                        >
                            NodeJS
                        </div>
                    </div>
                    <div className="progress" style={{ height: "30px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%"}}
                        >
                            ExpressJS
                        </div>
                    </div>
                    <div className="progress" style={{ height: "30px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "65%"}}
                        >
                            MongoDB
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
