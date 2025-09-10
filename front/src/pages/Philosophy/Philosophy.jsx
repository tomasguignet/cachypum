import React, { useEffect } from "react";
import BackArrow from "../../components/BackArrow/BackArrow";

const Philosophy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // 👈 Esto scrollea al tope
  }, []);

  return (
    <div className="pb-10">
      <BackArrow />
      <header className="bg-[url(./images/alquimia.jpg)] h-20 sm:h-32 lg:h-52 bg-cover bg-center text-center content-center">
        <h1 className="font-[DM_Serif_Text] text-xl sm:text-2xl lg:text-[2.6rem] text-white inline">
          {"la "}
        </h1>
        <h1 className="font-[Sora] font-black text-lg sm:text-2xl lg:text-[2.5rem] text-white inline">
          alquimia
        </h1>
      </header>
      <section className="text-[0.65rem] sm:text-base lg:text-[0.85rem] sm:grid sm:grid-cols-2 sm:gap-x-5 lg:gap-x-12 xl:gap-x-24 mt-4 sm:mt-7 lg:mt-10 xl:mt-16 mb-2 sm:mb-6 mx-2 sm:mx-4 lg:mx-8 xl:mx-16 text-justify text-[#41515e] leading-relaxed">
        {/* Columna izquierda */}
        <div>
          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`Recuerdo una mañana de guardapolvo almidonado.
Usado, pero ahora era mío.
Creo que era un Día de la Patria.
Ese día, y solo ese día, miraba mi guardapolvo con orgullo.
El Faris cocinaba las empanadas de la Panadería San Martín.
La ensalada era de lechuga con mucho limón.
Hasta la caja de cartón reciclado tenía magia,
con papel madera entre empanadas: el packaging posible,
pero con sentido.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`La Lela —siempre con el mismo tapado sacado en cuotas
en Modas De Simone
se maquillaba con un rojo furioso
y nos hacía prometer que nos portaríamos bien.
En la parada del micro, casi como un rito,
nos acicalaba con un pañuelito de tela finísima,
usando su uña del meñique con precisión quirúrgica.
Todo se volvía especial, hasta el dolor de tímpano.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`Siendo un día patrio, había acto.
Y si había acto, yo tenía un rol protagónico.
Tal vez como vendedor de velas, tal vez como soldado.
Pero siempre —para mí— era descollante. Perfecto.
Momentos.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`Cachypum es tal vez eso:
el éxtasis de todos los sentidos en la construcción de una emoción.
Es plenitud.
Es belleza.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`Miles de emociones me abruman cuando abro el cofre de los recuerdos.
Emociones violentas. Emociones dulces.
Emociones, simplemente.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`El sueño...
Estoy convencido de que su significado es tan subjetivo como mágico.
Es alquimia pura.
Es magia blanca.
Es la fórmula que tantos sabios han buscado y que pocos logran encontrar.
Es un blend de las mejores vides,
la mezcla justa de tiempos, espacios y sustancias,
de emociones que se conjugan para dar lugar a otros sueños.`}
          </p>
        </div>

        {/* Columna derecha */}
        <div>
          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`La alquimia, esa emoción que todo lo transforma,
es proponerse ser siempre positivo.
Es encontrar –no sólo buscar– el sentido de belleza en lo más cotidiano:
en una emoción, en un contexto, en una situación inesperada.
Si fuese un juego, sería una partida de truco,
donde, con lo que el azar nos entrega,
elegimos jugar la mejor mano posible.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`La alquimia también es un deseo:
el deseo de que una emoción no se agote, que se vuelva imperdurable.
Que viaje en el tiempo a través de las personas,
como una fábula viva, capaz de sostenernos en un sueño colectivo.
Es un viaje sensorial hacia la infancia,
ese rincón de aventuras que todos llevamos dentro.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`El contenido de este sueño es la sabiduría popular.
Es reconectar con los saberes perdidos,
esos que iluminan y nutren lo curricular,
que refrescan el alma y nos devuelven al origen.
Es ese lugar en el mundo que muchos elegimos para crecer.
Es combinar olores y fragancias, colores y texturas,
sonidos y escenografías que dan forma a espacios soñados.
Es una carta dirigida al niño que fuimos,
y al que aún somos —ese que no tiene edad cronológica,
sino una edad mental y espiritual siempre despierta.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`Es aprender meteorología según el caminar de las hormigas,
leer el lenguaje del viento,
descifrar la lluvia en la danza de los pájaros,
y recordar que la tierra también habla,
si sabemos escucharla.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            {`Los espacios son la isla en la laguna, el huerto y la granja.
Los momentos... son todos.
Cada milímetro de emoción cuenta.
Son experiencias que sanan, que enriquecen,
que nos devuelven la calidad de vida 
Es un juego holístico, que busca en lo lúdico
el origen profundo de cada acción.`}
          </p>

          <p className="mb-2 lg:mb-3.5 whitespace-pre-line">
            Bienvenido y{" "}
            <span className="font-semibold tracking-wide">CA- CHY- PUM</span>
            <br />
            La justicia también se construye con belleza
          </p>
        </div>
      </section>

      <h2 className="mt-2 mb-1 lg:mb-2 mr-3 lg:mr-5 text-lg sm:text-3xl lg:text-5xl text-right font-[Corinthia] mx-2 sm:mx-4 lg:mx-8 xl:mx-16">
        Marcelo Jury
      </h2>
    </div>
  );
};

export default Philosophy;
