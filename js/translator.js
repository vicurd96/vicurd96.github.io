$(document).ready(function(){
  var dict = {
    "Computer Sciences Student": {
      es: "Estudiante de las Ciencias de la Computación",
      en: "Computer Sciences Student"
    },
    '"Science is what we understand well enough to explain to a computer.<br>Art is everything else we do." - <b>Donald Knuth</b>': {
      es: '"Si piensas que vales lo que sabes, estás muy equivocado. <br>Tus conocimientos de hoy no tienen mucho valor \
      más allá de un par de años.<br> Lo que vales es lo que puedes llegar a aprender,<br> la facilidad con la que te adaptas a \
      los cambios que esta profesión nos regala tan frecuentemente."<br> - <b>José M. Aguilar</b>',
      en: '"Science is what we understand well enough to explain to a computer.<br>Art is everything else we do." - <b>Donald Knuth</b>'
    },
    "I'm a Computer Sciences Student at University of Zulia (LUZ), focused on learning all about databases and machine learning. Junior back-end developer. Also an astrophysics lover and a natural leader.<br><br> Dynamic, enthusiast and passionate are some terms that would describe myself and my work, but I couldn't define myself in words.": {

      es: "Soy un estudiante de las Ciencias de la Computación en la Universidad del Zulia (LUZ), me centro en aprender todo acerca de bases de datos \
      y machine learning. Soy desarrollador Junior en backend. También amante de la astrofísica y un líder natural.<br><br> \
      Dinámico, entusiasta y apasionado son algunos términos que me definen a mí y a mi trabajo, pero no podría presentarme con unas pocas palabras.",

      en: "I'm a Computer Sciences Student at University of Zulia (LUZ), focused on learning all about databases and machine learning. Junior back-end developer. \
        Also an astrophysics lover and a natural leader.<br><br> \
        Dynamic, enthusiast and passionate are some terms that would describe myself and my work, but I couldn't define myself in words."
    },
    "Skills": {
      es: "Destrezas",
      en: "SKills"
    },
    "Achivements, courses and certifications": {
      es: "Logros, cursos y certificaciones",
      en: "Achivements, courses and certifications"
    },
    "Building websites and restful services with Django and Flask.": {
      es: "Construyendo sitios web y servicios restful con Django y Flask.",
      en: "Building websites and restful services with Django and Flask."
    },
    "Working and maintaining websites with C#, ASP.NET MVC and LINQ": {
      es: "Trabajando y manteniendo sitios web con C#, ASP.NET MVC y LINQ.",
      en : "Working and maintaining websites with C#, ASP.NET MVC and LINQ."
    },
    "Building, designing and maintaining databases and querying efficiently.": {
      es: "Construyendo, diseñando y manteniendo bases de datos y consultando eficientemente.",
      en: "Building, designing and maintaining databases and querying efficiently."
    },
    "Experienced and proficient user in GNU/Linux systems, working with bash and ssh.": {
      es: "Usuario proeficiente y experimentado en sistemas GNU/Linux, trabajando con bash y ssh.",
      en: "Experienced and proficient user in GNU/Linux systems, working with bash and ssh."
    },
    "Adobe Photoshop Course": {
      es: "Curso de Adobe Photoshop",
      en: "Adobe Photoshop Course"
    },
    "Honor roll at LUZ": {
      es: "Cuadro de honor en LUZ",
      en: "Honor roll at LUZ"
    },
    "Experience and projects": {
      es: "Experiencia y proyectos",
      en: "Experience and projects",
    },
    "Web developer": {
      es: "Desarrollador web",
      en: "Web developer"
    },
    "Developing websites with Microsoft Visual Studio and using C#, ASP.NET MVC and LINQ. Source code management and version control using TFS and Git. Deploying and working on applications and website both in production as test environments.": {
      es: "Desarrollo de páginas web con Microsoft Visual Studio utilizando C#, MVC y LINQ. Manejo de control de versiones y actividades con TFS y Git. Publicación y mantenimiento de las aplicaciones y páginas web tanto en producción como en entorno de pruebas.",
      en: "Developing websites with Microsoft Visual Studio and using C#, ASP.NET MVC and LINQ. Source code management and version control using TFS and Git. Deploying and working on applications and website both in production as test environments."
    },
    "Developer and owner": {
      es: "Desarrollador y creador",
      en: "Developer and owner"
    },
    "Squirrel Wallet is a cryptocurrency web-based wallet for bitcoins. You can host your own web wallet and generate your pair-keys, transact and update a profile. Also you can check outcoming/incoming transactions info even if you're not registered.": {
      es: "Squirrel Wallet es un monedero de criptomonedas web para bitcoin. Puedes desplegar tu propio monedero web y generar tus claves, transar y actualizar un perfil. También puedes ver la información de transacciones entrantes y salientes incluso si no estás registrado.",
      en: "Squirrel Wallet is a cryptocurrency web-based wallet for bitcoin and ethers. You can host your own web wallet and generate your pair-keys, transact and update a profile. Also you can check outcoming/incoming transactions info even if you're not registered."
    },
    "Social networks": {
      es: "Redes sociales",
      en: "Social networks"
    },
    "Links": {
      es: "Enlaces",
      en: "Links"
    },
    "University of Zulia": {
      es: "Universidad del Zulia",
      en: "University of Zulia"
    },
    "Computer Sciences @ LUZ": {
      es: "Ciencias de la Computación @ LUZ",
      en: "Computer Sciences @ LUZ"
    },
    "Artificial Intelligence": {
      es: "Inteligencia Artificial",
      en: "Artificial Intelligence"
    },
    "Maths": {
      es: "Matemáticas",
      en: "Maths"
    },
    "Sciences": {
      es: "Ciencias",
      en: "Sciences"
    },
    "Computer Scientist": {
      es: "Computista",
      en: "Computer Scientist"
    },
    "August": {
      es: "Agosto",
      en: "August"
    },
    "March": {
      es: "Marzo",
      en: "March"
    },
    "November": {
      es: "Noviembre",
      en: "Noviembre"
    },
    "Contact": {
      es: "Contacto",
      en: "Contact"
    },
    "About me": {
      es: "Acerca de mí",
      en: "About me"
    },
    "by": {
      es: "por",
      en: "by",
    },
    "love": {
      es: "amor",
      en: "love",
    },
    "with": {
      es: "con",
      en: "with",
    },
  }
  var translator = $('body').translate({lang: "en", t: dict});
  translator.lang("es");

  $('#es').on('click', function(){
    translator.lang("es")
  });

  $('#en').on('click', function(){
    translator.lang("en")
  });
});
