const posts = []

function formulario(evento) {
    const titulo = document.getElementById("titulo")
    const autor = document.getElementById("autor")
    const conteudo = document.getElementById("conteudo")
    const valorTitulo = titulo.value
    const valorAutor = autor.value
    const valorConteudo = conteudo.value

    posts.push({ titulo: valorTitulo, autor: valorAutor, conteudo: valorConteudo })
    console.log(posts)

    titulo.value = autor.value = conteudo.value = ""
}

function adicionarPost(titulo, autor, conteudo) {
    const postagens = document.getElementById("postagens")
    postagens.innerHTML += "<article><h4>" + titulo + "</h4><h5>" + autor + "</h5><p>" + conteudo + "</p></article>"
}