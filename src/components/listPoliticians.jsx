import React from "react";
import CardPoliticians from "./CardPoliticians";

function ListPoliticians({ list }) {
    return (
        <section>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-7">
                {list.map((politic) => (
                    <div key={politic.id}>
                        <CardPoliticians politic={politic} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default React.memo(ListPoliticians)