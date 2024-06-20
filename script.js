// Check if the user is ready to play!
if (confirm('¡Estoy listo para jugar!')) {
    var age = prompt("¿Cuál es tu edad?");
    if (age <= 13) {
        alert('¡Felicidades! Puedes jugar, pero no nos hacemos responsables de la naturaleza adictiva de este juego.');
    } else {
        alert('¡Juega, usuario! ¡Juega!');
    }

    alert("Estás caminando en un bosque denso con tus amigos y encuentras una casa abandonada.");

    var pre1 = prompt("¿Qué haces? a) Salgo del bosque y vuelvo al pueblo. b) Entro a averiguar qué hay dentro.");
    if (pre1 === "a") {
        alert("Decides no explorar la casa y vuelves al pueblo. Fin del juego.");
    } else {
        alert("Decides entrar a averiguar qué hay dentro.");

        alert("Encuentras una vieja escalera que desciende al sótano de la casa.");
        var pre2 = prompt("¿Qué decides hacer? a) No bajar y quedarme en el piso principal. b) Bajar con mis amigos para explorar.");
        if (pre2 === "a") {
            alert("Decides no bajar al sótano. Fin del juego.");
        } else {
            alert("Decides bajar con tus amigos para explorar.");

            alert("Marcos encuentra un libro titulado 'El Secreto de la Casa'.");
            var pre3 = prompt("¿Qué le sugieres que haga? a) Dejar el libro en su lugar. b) Leer el libro para descubrir más sobre la casa.");
            if (pre3 === "a") {
                alert("Decides dejar el libro en su lugar. Fin del juego.");
            } else {
                alert("Decides leer el libro para descubrir más sobre la casa.");

                alert("Oyes un ruido fuerte y descubres una trampilla oculta.");
                var pre4 = prompt("¿Qué decides hacer? a) Ignorar la trampilla y seguir explorando otras áreas. b) Abrir la trampilla y bajar para investigar más.");
                if (pre4 === "a") {
                    alert("Decides ignorar la trampilla. Fin del juego.");
                } else {
                    alert("Decides abrir la trampilla y bajar para investigar más.");

                    alert("Encuentras un frasco con un líquido dorado en una cámara subterránea.");
                    var pre5 = prompt("¿Qué decides hacer? a) No tocar el frasco y seguir investigando la cámara. b) Tomar el frasco para examinarlo más de cerca.");
                    if (pre5 === "a") {
                        alert("Decides no tocar el frasco. Fin del juego.");
                    } else {
                        alert("Decides tomar el frasco para examinarlo más de cerca.");

                        alert("Una figura sombría emerge de las sombras.");
                        var pre6 = prompt("¿Qué haces? a) Huir inmediatamente de la cámara subterránea. b) Quedarme y enfrentar a la figura.");
                        if (pre6 === "a") {
                            alert("Huyes inmediatamente de la cámara subterránea y escapas de la casa.");
                        } else {
                            alert("Te quedas y enfrentas a la figura. Con valentía, Marcos rompe el frasco y la figura se desintegra.");
                        }
                        alert("La casa empieza a temblar y parece que se va a derrumbar.");
                        var pre7 = prompt("¿Cuál es tu reacción? a) Buscar una salida y escapar de la casa rápidamente. b) Quedarme para ver qué sucede.");
                        if (pre7 === "a") {
                            alert("Escapas de la casa justo a tiempo antes de que se derrumbe.");
                        } else {
                            alert("Decides quedarte y eres atrapado en el derrumbe. Fin del juego.");
                        }

                        alert("Después de escapar, decides qué hacer respecto a la experiencia en la casa.");
                        var pre8 = prompt("¿Cuál es tu decisión? a) Contar la historia a todos en el pueblo. b) Prometer no hablar nunca de lo sucedido.");
                        if (pre8 === "a") {
                            alert("Decides contar la historia al pueblo, pero nadie te cree.");
                        } else {
                            alert("Decides no hablar nunca de lo sucedido y mantener el secreto.");
                        }

                        alert("¡Gracias por jugar! ¿Cómo calificarías este juego de 1 a 10?");
                        var feedback = prompt("Por favor, califica este juego del 1 al 10");
                        if (feedback > 8) {
                            alert("¡Gracias! ¡Nos vemos en la próxima aventura!");
                        } else {
                            alert("¡Gracias por tus comentarios!");
                        }
                    }
                }
            }
        }
    }
} else {
    alert("Fin des juego ¡Hasta la proxima!");
}
