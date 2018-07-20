$(function(){
    let max=8;
    let count=Math.floor(Math.random() * max) + 1;
    $('.next').click(function(evt) {
        console.log("Button was clicked");
        if(count!= max){
            count++;
        }
        else{
            count=1;
        }
        food_ref.on('child_added', function(data) {
            const key = data.key;
            const obj = data.val();
            console.log(key);
            console.log(obj);
            if(key==count) {
                let path = obj.img_path;
                let ing = obj.ingredients.split(',');
                $('.img_space').attr("src", path);
                $('.ingredients').html('');
                for (let item of ing) {
                    $('.ingredients').append(`<span>${item}</span>`);
                }
                $('price').html(obj.price);
                $('.res_name').html(obj.res_name);
                $('.res_tel').attr("href", `tel:${obj.res_tel}`);
                $('.res_website').attr("href", obj.website);
                let add = obj.res_address.split(',');
                $('.res_address_text').html('');
                for (let item of add) {
                    $('.res_address_text').append(`<span>${item}</span>`);
                }
            }
        });
    });
    $('.prev').click(function(evt) {
        console.log("Button was clicked");
        if(count!= 1){
            count--;
        }
        else{
            count=max;
        }
        food_ref.on('child_added', function(data) {
            const key = data.key;
            const obj = data.val();
            console.log(key);
            console.log(obj);
            if(key==count) {
                let path = obj.img_path;
                let ing = obj.ingredients.split(',');
                $('.img_space').attr("src", path);
                $('.ingredients').html('');
                for (let item of ing) {
                    $('.ingredients').append(`<span>${item}</span>`);
                }
                $('price').html(obj.price);
                $('.res_name').html(obj.res_name);
                $('.res_tel').attr("href", `tel:${obj.res_tel}`);
                $('.res_website').attr("href", obj.website);
                let add = obj.res_address.split(',');
                $('.res_address_text').html('');
                for (let item of add) {
                    $('.res_address_text').append(`<span>${item}</span>`);
                }
            }
        });
    });
    console.log("outside the block");
    const food_ref= firebase.database().ref('/meal');
    console.log(food_ref);
    food_ref.on('child_added', function(data) {
        const key = data.key;
        const obj = data.val();
        console.log(key);
        console.log(obj);
        if(key==count) {
            let path = obj.img_path;
            let ing = obj.ingredients.split(',');
            $('.img_space').attr("src", path);
            $('.ingredients').html('');
            for (let item of ing) {
                $('.ingredients').append(`<span>${item}</span>`);
            }
            $('price').html(obj.price);
            $('.res_name').html(obj.res_name);
            $('.res_tel').attr("href", `tel:${obj.res_tel}`);
            $('.res_website').attr("href", obj.website);
            let add = obj.res_address.split(',');
            $('.res_address_text').html('');
            for (let item of add) {
                $('.res_address_text').append(`<span>${item}</span>`);
            }
        }
    });
});
