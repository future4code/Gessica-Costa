type post = {
    autor: string,
    texto: string
}

const olaMaria: post = {
    autor: 'Maria',
    texto: 'Bom dia'
}

const olaJoao: post = {
    autor: 'Joao',
    texto: 'Bom dia'
}

const olaPaula: post = {
    autor: 'Paula',
    texto: 'Bom dia'
}

const olaMaria2: post = {
    autor: 'Maria',
    texto: 'Bom dia'
}

const olaJose: post = {
    autor: 'José',
    texto: 'Bom dia'
}

function postsDoAutor(
    arrayPosts: post[],
    autor: string
): post[] {
    return arrayPosts.filter(post => {
        return post.autor === autor
    })
}

console.log(postsDoAutor([olaJoao, olaMaria, olaPaula, olaMaria2], 'Maria'))