import React from "react";

const EditExpensePage = (props) => (
    <div>
        Editing the expense of id: {props.match.params.id}
    </div>
)

export default EditExpensePage