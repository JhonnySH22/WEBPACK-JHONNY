import '../css/componentes.css';



// export const saludar = ( nombre ) => {

//     console.log('Creando etiqueta h1, en el HTML!');

//     const h1 = document.createElement('h1');
//     h1.innerText = `Hola, ${ nombre }`;

//     document.body.append( h1 );

// }


/////////////////////////////////////

const boligrafos = {
    lapicero: {
        nombre: 'pilot',
        tinta: 'roja'
    },
    plumon: {
        nombre: 'fabercastel',
        tinta: 'negra'
    },
    lapiz: {
        nombre: 'mongol',
        tinta: 'grafito'
    }

}


// retorna callback...
export const bucarBoligrafo = (id, callback) => {
const boligrafo = boligrafos[id];
callback(boligrafo);
};




