import React from "react";
import CardList from "../components/cards/CardList";

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center" }}>
            <p style={{ fontSize: 28}}>
                Log In with:
            </p>
            <CardList />
            <div style={{ marginBottom: 50 }} />
        </div>
    );
};

export default Home;
