let newProduct = []
let pai = document.querySelector('body')

fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then((objeto) =>{newProduct = objeto
                    return newProduct
                })

                .then(newProduct =>{
                    newProduct.forEach(elemento =>{
                        let imagem = document.createElement('img')
                        imagem.src = elemento.image
                        imagem.width = '100'
                        imagem.alt = elemento.title

                        pai.appendChild(imagem)
                    }

                    )
                })
                .then(newProduct => console.log(newProduct))
                .catch(erro => console.log(erro))