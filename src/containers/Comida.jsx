import React from 'react';

const Comida = () => {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td> 5 Claras con espinaca</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>1 Scoop proteina,1 Scoop de avena y 1 Scoop de nestum con arroz</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Comida;