import React from "react";

import "./Home.css"



const Home = () => {
    const click = (event) => {
        event.preventDefault();
        alert("No me gustan tanto los patos, nadamas no sabia de que hacer la pagina")
    }
    return(
        <div className="todo">
        <h1 className="titulo">Patos</h1>
        <div>
                <img className="Patos1" src="https://1.bp.blogspot.com/-WJaO5P6RyVQ/XaJ_3wrXFQI/AAAAAAAAA8w/r7gtDA1ObqgGY6enNry3kbzDy_sbaaM1gCLcBGAsYHQ/s1600/patos.jpg"></img>
                <br/>
                <div className=" patodef">
                    Pato es el nombre común para ciertas aves de la familia Anatidae, principalmente de la subfamilia Anatinae y dentro de ella del género Anas. No son un grupo monofilético, ya que no se incluyen los cisnes ni los gansos. La mayoría de las razas descienden del ánade real (Anas platyrhynchos), que fue domesticado en el sur de China. Son una fuente de alimentación particularmente importante en las zonas rurales de Asia, en especial en el Asia sudoriental.
                </div>
                <div className="tablapatos">
                    <table border="2">
                        <th>
                            Especies de Patos
                        </th>
                        <tr>
                            <td>
                                Anas bahamensis
                            </td>
                            <td>
                                Nombre común pato gargantillo o pato cariblanco.
                            </td>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/White-cheeked_Pintail_%28Anas_bahamensis_galapagensis%29_%2820275851798%29.jpg/375px-White-cheeked_Pintail_%28Anas_bahamensis_galapagensis%29_%2820275851798%29.jpg"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Anas cyanoptera
                            </td>
                            <td>
                                Nombre común pato colorado o cerceta colorada.
                            </td>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Anas_cyanoptea.jpg/405px-Anas_cyanoptea.jpg"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Anas discors
                            </td>
                            <td>
                                Nombre común pato media luna, cerceta aliazul o barraquete aliazul.
                            </td>
                            <td> 
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bluewingedteal54.jpg/413px-Bluewingedteal54.jpg"/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h2 className="videot">Una Cancion de Patos</h2>
                    <br></br>
                    <iframe className="video" width="420" height="240" src="https://www.youtube.com/embed/MtN1YnoL46Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <input className="boton" type="button" value="Click to LEARN MORE!" onClick={click}/>
                </div>
        </div>
        </div>
    )
}

export default Home