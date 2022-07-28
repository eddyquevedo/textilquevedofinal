let films =[
    {id:'1',categoria:'maquina1',img:`https://http2.mlstatic.com/D_NQ_NP_722880-MLA31009695852_062019-O.webp`, title:"Máquina De Coser automatica Singer 2250 Brazo Libre",precio:47000,envio:' Envio gratis',categoria2:'familiar',tecnologia:' Mecánica',puntos:'30',stock:10},
    {id:'2',categoria:'maquina1',img:`https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/MAQCOS07/1000x1000-MAQCOS07.jpg&w=1000&q=100`, title:"Máquina de Coser Gadnic SW7000 16 Puntadas Portátil 2 Velocidades Pedal y Luz",precio:51000,envio:' Envio gratis',categoria2:'familiar',tecnologia:' Mecánica',puntos:'32',stock:6},
    {id:'3',categoria:'maquina1',img:`https://http2.mlstatic.com/D_NQ_NP_988495-MLA48254561853_112021-O.webp`, title:"Máquina de coser recta Godeco Fantastique blanca y rosa",precio:44500,envio:' Envio gratis',categoria2:'familiar',tecnologia:' Mecánica',puntos:'35',stock:30},

    {id:'4',categoria:'maquina2',img:`https://http2.mlstatic.com/D_NQ_NP_759517-MLA41827553543_052020-O.webp`, title:"Máquina de coser semi industrial recta Janome 523H",precio:90500,envio:' Envio gratis',categoria2:'Semi Industrial',tecnologia:' Mecánica',puntos:'72',stock:20},
    {id:'5',categoria:'maquina2',img:`https://http2.mlstatic.com/D_NQ_NP_612125-MLA32501485457_102019-O.webp`, title:"Máquina de coser semi industrial overlock Janome 1210DX portable",precio:107500,envio:' Envio gratis',categoria2:'Semi Industrial',tecnologia:' Mecánica',puntos:'75',stock:15},
    {id:'6',categoria:'maquina2',img:`https://http2.mlstatic.com/D_NQ_NP_871014-MLA32503330881_102019-O.webp`, title:"Máquina de coser semi industrial recta Toyota Power Fabriq 17 portable",precio:62500,envio:' Envio gratis',categoria2:'Semi Industrial',tecnologia:' Mecánica',puntos:'45',stock:7},

    {id:'7',categoria:'maquina3',img:`https://d2r9epyceweg5n.cloudfront.net/stores/727/421/products/20210303_115403-removebg-preview-11-818c149f118daf854616183277004063-640-0.png`,title:"Máquina recta electronica tactil",precio:103000,envio:' Envio gratis',categoria2:'Industrial',tecnologia:' Electronica',puntos:'80',stock:8},
    {id:'8',categoria:'maquina3',img:`https://d2r9epyceweg5n.cloudfront.net/stores/727/421/products/20210312_104828-removebg-preview-42-227f3d428fda63fdc016282979615855-640-0.png`,title:"Máquina Multifuncional Tapacostura",precio:120000,envio:' Envio gratis',categoria2:'Industrial',tecnologia:' Mecánica',puntos:'90',stock:11},
    {id:'9',categoria:'maquina3',img:`https://d2r9epyceweg5n.cloudfront.net/stores/727/421/products/mb4s-tienda1-24dbe7bd284de4e05515236253871591-480-0.jpg`,title:"Máquina Bordadora MB 4S",precio:89000,envio:' Envio gratis',categoria2:'Industrial',tecnologia:' Electronica',puntos:'85',stock:12},
];

  // la constante films se guarda en un estado(data) para poder enviarselo a ItemList usando el useEffect y cuando se monta se crea una promesa que vuelva en 2 seg.

export const getFetch = (id) => {
    return new Promise((resolve) =>{ //se comporta como una pregunta podrias darme en 2seg
            setTimeout(() => {
                if(id){
                    resolve(films.find((film) => film.id===id))
                } else{
                    resolve(films)
                }
            },1000) //aqui te devuelve en 2 seg.
        });
    };



