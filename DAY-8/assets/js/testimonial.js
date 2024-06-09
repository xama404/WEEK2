const TestimonialData = [
    {
        image:"https://th.bing.com/th/id/OSK.HEROdvn-G8xEhi0AoPDTdOwgNoC9vBNTimyzzaZq1RNVszw?rs=1&pid=ImgDetMain",
        content: "YANTOKATES (YNTKTS)",
        author: "JKW 2014-∞",
        rating: 5
    },

    {
        image:"https://3.bp.blogspot.com/-u33xQRd9HzA/TdFrTNa2TiI/AAAAAAAAAUc/ENrfKUBILC4/s1600/soeharto%252C.jpg",
        content: "PENAK JAMAN KU TOH?",
        author: "SOEHARTO 1966-1998",
        rating: 5
    },

    {
        image:"https://th.bing.com/th/id/OIP.GDHkq-JoAL3U-y3u7EId0wHaDt?rs=1&pid=ImgDetMain",
        content: "Samlekom mamang",
        author: "H Adolf",
        rating: 1
    },

    {
        image:"https://cms.disway.id/uploads/d41ca36417a1949a8c518c322adfaba1.jpg",
        content: "Uhuyyyyy",
        author: "Komeng",
        rating: 4
    },

    {
        image:"https://th.bing.com/th/id/OIP.RcrcbnYtzrfV22zJV9zyPAHaGr?rs=1&pid=ImgDetMain",
        content: "Beat Mber lu warna apa Bosss",
        author: "Timothy Ronald",
        rating: 3
    },

]

function html(item) {
    return `
    <div class="testimonial">         
        <img src="${item.image}" alt="ini gambar testi" class="profile-testimonial">
            <p class="quote">${item.content}</p>
            <p class="author">-${item.author}</p>
            <p class="author">${item.rating} <i class="fa-regular fa-star"></i></p>
     </div>`;
}
function allTestimonial() {
    let testimonialHtml = ``;
    TestimonialData.forEach((item) => {
        testimonialHtml += html(item);
    });

    document.getElementById("testimonials").innerHTML = testimonialHtml;
}

allTestimonial();
function filterTestimonials(rating) { 
    let testimonialHtml = ``;
    const testimonialFilter = TestimonialData.filter ((item) => {
        return item.rating === rating;
    });

    if (testimonialFilter.length === 0) {
        testimonialHtml = `<h1> Data Not Found</h1>`;
    }else {
        testimonialFilter.forEach((item) => {
            testimonialHtml += html(item);
        });
    }
    document.getElementById("testimonials").innerHTML = testimonialHtml;

} 


