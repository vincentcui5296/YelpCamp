const Campground = require("./models/campground");
const Comment = require("./models/comment");

const data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Sed ornare eu augue id condimentum. Duis ultrices risus metus, a imperdiet ligula sagittis eu. Pellentesque tempus interdum dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ac semper sem, sit amet convallis urna. Nunc porta et quam non commodo. Proin lacinia, tellus sed rhoncus dignissim, nunc sem imperdiet est, quis convallis orci metus nec elit. Sed eget ipsum ac quam consequat aliquet. Phasellus rutrum dolor quis dolor vestibulum, eu mattis mi tincidunt. Phasellus aliquam sit amet mi non rutrum. Nullam at porttitor risus. Vivamus et sem commodo, blandit leo lobortis, tempus nisi. Sed eu risus diam. Quisque maximus, risus id molestie accumsan, elit lacus varius orci, ut varius magna dui et magna. Proin sit amet mauris faucibus, efficitur dui euismod, consectetur mi."
    },
    {
        name: "Desert Mesa",
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Integer tempor feugiat ultrices. Suspendisse in elit tempus, condimentum eros at, fringilla magna. Vestibulum consectetur augue sem, eget porta nisi feugiat nec. Fusce efficitur dignissim nisl, in vestibulum mauris suscipit sed. Morbi congue quam in efficitur rutrum. Vivamus at nibh nisl. In ultricies diam vel erat pretium posuere. Morbi ac turpis volutpat, mattis tortor vitae, suscipit ex. Sed at eros sit amet quam posuere efficitur. In malesuada dui mauris, quis lacinia leo consectetur et. Curabitur a diam in nibh aliquet bibendum eget quis odio. Sed quis turpis id magna mollis scelerisque."
    },
    {
        name: "Canyon Floor",
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Praesent pretium tincidunt porta. Vestibulum tempus pulvinar eros nec facilisis. Sed ornare feugiat mattis. Nulla eleifend dolor ut lectus dignissim aliquam. Vestibulum egestas eros ac faucibus pretium. Vestibulum nibh mauris, dignissim posuere ultrices ac, hendrerit commodo tellus. Integer ullamcorper sapien quis molestie tincidunt. Proin tempor sit amet dui ut aliquam. Etiam fringilla, lectus at gravida tincidunt, ex dolor rutrum massa, sit amet ultricies orci nisl ac urna. Maecenas auctor mi consectetur erat sagittis blandit. Mauris urna elit, gravida sed laoreet et, consequat nec libero. Nam tristique et odio at dapibus. Donec ac facilisis enim. Aenean vel eros ultrices, sagittis mi sit amet, rhoncus elit. Sed porttitor urna id turpis hendrerit venenatis. Maecenas vitae tempus nulla."
    }
]

function seedDB() {
    Campground.deleteMany({}, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            data.forEach(seed => {
                Campground.create(seed, (err, campground) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, (err, comment) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            }
                        )
                    }
                });
            });
        }
    });
}

module.exports = seedDB;