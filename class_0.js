//Función que retome el último certificado de un professor
const personas = [
    {
        nombre: 'profesor1',
        certificados: [{
            nombre: 'Ingenieria',
            anio: 2004,
            entidad: 'UNT'
        },{
            nombre: 'Master en datos',
            anio: 2012,
            entidad: 'UBA'
        }]
    },{
        nombre: 'profesor2',
        certificados: [{
            nombre: 'Biología',
            anio: 2004,
            entidad: 'UNT'
        },{
            nombre: 'Master en ciencias',
            anio: 2012,
            entidad: 'UBA'
        }]
    } 
]
function getUltimoCertificado(profesor){
    const filterJs = personas.filter((personas) => personas.nombre.includes(profesor));
    const another = filterJs[0].certificados.slice(-1);
    console.log(another);

    //filterJs.forEach((certificados) => console.log(certificados.certificados.slice(- 1)));    
}
(getUltimoCertificado('profesor2'))