const axiosInstance = axios.create({
    baseURL: 'http://85.143.173.184:3066/',
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})

$(document).ready(function () {
    // получаем значение счетчика
    axiosInstance.post( '/getCounter', {
        url: window.location.pathname,
    })
        .then(function (response) {
            if (response.data.ok) {
                // прописываем значение счетчика на кнопке
                $(".is-helpful_yes_count").text(response.data.result.like)
            }
        })
        .catch(function (error) {
            console.log(error);
        })

    // обработка нового клика
    $(".is-helpful__btn.button-y").click(function () {
        axiosInstance.post( '/newClick', {
            url: window.location.pathname,
            type: 'like'
        })
            .then(function (response) {
                if (response.data.ok) {
                    // прописываем значение счетчика на кнопке
                    $(".is-helpful_yes_count").text(response.data.result.like)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    });

})