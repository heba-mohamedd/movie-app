import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'



function Header() {
    return (
        <div className="row">
            <header className="header">
                <nav className="navbar">
                    <h2 style={styles.h2} className="col-2">Anonime</h2>
                    <span style={styles.span} className="col-1">Home</span>
                    <span style={styles.span} className="col-1">List anime</span>
                    <input className="form-control me-2 " type="text" placeholder="Search anime or movie" style={styles.input} />
                </nav>
            </header>
            
        </div>

    );

}

const styles = {
    input: {

        width: "40%",
        marginRight: "50px",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "25px",
        border: "1px solid #ccc",
        backgroundColor: "rgb(70, 65, 126)",
        '::placeholder': {
            color: "whitesmoke",
            fontStyle: "italic",
        }
    },
    header: {
        backgroundColor: "rgb(36, 32, 78)"

    },
    h2: {
        color: "whitesmoke"
    },
    span: {
        color: "gray"

    }


}


export default Header