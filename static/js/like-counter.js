const axiosInstance = axios.create({
    baseURL: 'https://omua.edubot.pro/',
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
                $(".is-helpful_total_count").text(+response.data.result.like + +response.data.result.dislike)
            }
        })
        .catch(function (error) {
            console.log(error);
        })

    // обработка нового клика 'like'
    $(".is-helpful__btn.button-y").click(function () {
        axiosInstance.post( '/newClick', {
            url: window.location.pathname,
            type: 'like'
        })
            .then(function (response) {
                if (response.data.ok) {
                    // прописываем значение счетчика на кнопке
                    $(".is-helpful_yes_count").text(response.data.result.like)
                    $(".is-helpful_total_count").text(+response.data.result.like + +response.data.result.dislike)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    });

    // обработка нового клика 'dislike'
    $(".is-helpful__btn.button-n").click(function () {
        axiosInstance.post( '/newClick', {
            url: window.location.pathname,
            type: 'dislike'
        })
            .then(function (response) {
                if (response.data.ok) {
                    // прописываем значение счетчика на кнопке
                    $(".is-helpful_yes_count").text(response.data.result.like)
                    $(".is-helpful_total_count").text(+response.data.result.like + +response.data.result.dislike)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    });

})