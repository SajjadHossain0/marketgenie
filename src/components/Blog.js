import React from "react";
import "./BlogSection.css";

const blogs = [
    {
        title: "Boost Your eCommerce Sales with AI",
        description:
            "Discover how AI-powered product descriptions and dynamic pricing can skyrocket your online sales.",
        author: "Sarah Johnson",
        date: "Oct 18, 2025",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHCA0IBw0HBwcHBw0HBwcHBw8ICQcNFREWFhURExUYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDisZFRkrKy0rLS0rKysrLS0tLS0rLSs3Ky0rLSsrLSsrKysrKysrLSsrKystKysrKy0rKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQADB//EABcQAQEBAQAAAAAAAAAAAAAAAAABEQL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBgX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APPIUSFH1Xs5FhRIUadJGkORJDkVuRpDkSQ5BpJCkWQpASRcWQpBUxcXFwRMbCxsAcbDxsFDGw8TBAsTHTEwVzsSx0sGwHOwbHSxLBHKwbHSwbAcrBsdbAsEc6lOwajFgUadGsudgYy4yMYUODDjTpI0hSNCkadZFkORJDkGmkORJDkBpCkaQpBWkXFkWAmLiyKCYxY2AjYWNiAph4mAOJhMoGJYdg4AWDY6WDYDnYFjrYNgjlYFjrYFgOVg10sCjNCjTo1lzsHEJkYwoUGHGnSLDkGQ5FdIUhyDDkFWQ5EhSCrIUaLAaQsaLIg0iyLIuAmLi4uCDjYWNgDiYeJgBiYeJgBiWHYIoVLDo1UCwK6UaK52BXShRHOwLHWxzojnRp0ajFgsrIwsKJCiukLl0gR0itlDgwoBQ4MOCrCiRYCwpEhREYpGiwGxsXFBMbFbATEsJsAMTDo0AqU6NgANOjVUaFOjQChXShQc6FdKHQjlRp9DRmgysjCw+Qh8q3DhwYcGjhQYcAoUSFBVhRIUQWFEhQRYrRQZWUEZWBMQkoIlVgCjTo0Ao06NFCjTo1Rzo06FBzo06FEc6FdOnOiUVZkYWHAhxWocOBDg0cODCgpwoMKAUKDDiCnBhQRVjRgKMzAsjYrALKgJUWoA0adCgNGlRoo0aVGqDQp0KAVzrpXOiBQp0KJRZmRhYcc4fKtR0hwOTg0cOBDgpwoMKAUKCUQIoMKCEqRQVYkUFZGBajJaDVGSglEqFBKNKjRRo0qNUGhSoUBrnToUQOgp9OdEqMzIw0OBCirHTk45x0g2cOBCgOkKBDgpQoMWIHCgQoIcqwIUAl0VBWRgXUZAZFtG0EqVkoJRq0aKlGrRqg0atGgFCnQogUKVCjNRmZGGhQIUFjpHSOUOVW3SOkcocorpDjnClFOFAhSgcpShFlQNdCUtEKVdFgPW0NXQLU0dYFtREtBrUrWjRWo1aNUSjVo2gNG1aFoiVzp2udAaNWjUYqMiowkOBCgSnDjnCladI6ylK5ynBp0lOVylOUHSUpXOUpRThaEq6ByroaoHraOtqBsGtoHqaOtoLalqa2g1S1NTVGqWtaNoiWjatoWipaNW0LREtC1bQolSjVo1HO1FRkY1IUCFEJThQIUadJXSU5XKU5VbdJTlcpSlFdZSlc5SlFdJVlc5SlA9XQlXRD1tHW0U9RNbQXW0dbQXW0dbQW0bUtS0FtG1LRtBbQta0bRGtC1bQtES0atGozalGrRqOdqMjIxrQozBChRmV0iylKzNNw5SlVhpZSlZhSlXVYVtLUYC1tZgbW1mBtbUYG1NZgS0bVYBtG1GES0bWYQLRrMJRtSsyVihUqMy5VGZkYf/2Q==",
    },
    {
        title: "Dynamic Pricing Strategies That Work",
        description:
            "Learn the best AI-driven pricing strategies to stay competitive and increase profit margins.",
        author: "David Chen",
        date: "Oct 15, 2025",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExMYHSggGBolGxMTITEhJSkrOi4uFx8zODM4NygtLisBCgoKDQ0NDg0NDzcZFRkrKy0tNzcrLS0rKysrKysrKy0tKystLSsrKysrKysrKysrLSsrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBv/EABcQAQEBAQAAAAAAAAAAAAAAAAABERL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBwb/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/APKAPnXr4BoACgAgAAAiwUQIKAAAAIEABUFQRVAAAQAAAAAAAAEBYACoAAGgFAAAAAAAAoCBVEUAEEUECqIooqCRVEUABAAAABAGmQAKAglUQEqiKLQAKABQECqJqaJWhAWqIBVBAURQoICqCCqqEFUBkAAQRWnMQNAQRUA1NBqLrOmg1ozq6QUBASiVQJURRrV1lUFNZ1LSDXRrCrBuVYxG4mqoghVEUVBUFVUE1pQRBkTTW3JU0SgaaiKKIBVNQBdWMrAaioICFQAQUWKiAtQBBYihirKysFaVIrIKiiiKCoqKNYAIrmINuSoAIAIAAqKCxFFAKACVcKDIqCaAAAAAANRlYLjaxmLEFVBFUAVFRRrAAVzRoackFQERQAAAUBFDAIuGKgiVUUZFAIKAiKAgoCLEWBjRoIKpBFUAVFRRcRQFZqNIrmiNICIooAACgEWIqAKAiY0Cso1UEEUoIAoI0mAiwAWKRUBQRQEFwUBpFRQEUGIiKAiNCozgoCKAAKBBRFgAKiVpBGRrDFRnBrAogpgMqsBSAqCADUAUVFAUASiKCswAEgAJERpAQFVBQRrMBFFEUFABIACQBAiggRQAgigsABQAUFEEFEEFFoiKKgigCCjMAAgANAAAKVUAKAAAAAAgAEBRKqKAACAAAAAAAIAANIAAAAAIoACgIAAAAAgCiAKIAoAAAAAAAAAP/9k=",
    },
    {
        title: "Marketing Copy That Converts",
        description:
            "Master the art of creating catchy, engaging marketing content with AI assistance.",
        author: "Aisha Patel",
        date: "Oct 12, 2025",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAJ1BMVEX//wH//wf//gP//wX//wn//AH/9wD++QD/9QD/8QD/8wD/9AD++gDfWS1EAAAEVUlEQVR4nO3dC5ObIBSGYQV3TTf5/7+3chEPyEUSzUnge6fTdma3GXkGQZNsOvzb+rvf77fb7Zc0P35UQggp5dBd1kWlZDaceZ6X34yNkukax9IsOPPWQ88awX2QXP25SfO7TZnHw5xOetJwHyFjdx1daFYXs9j0bDO4dUavMfqP1UXVtc3g7U1GxrLouA+PtwAHNjS7zsyPWf2a7cYNGp3dsnUeDfeBfUIUR9sMA2zW9IyZ3dYNFNoP3bi5D+bTgk0m4GRyVzXcB/KJ4aImE2QQQgghhBBCCCGbuUnG00773Gtp5mk5PD1H83AEcLx8HAEcmsMZiQ/3QX1KG84InDCCM+K82qdOqWXe7FYeEA1pHO7j+oiAk8kuxyTguICTKYUDHd0CMU6TB4SlZ23FITzAcS1XgqMJOPuWqQOcdMGyDBw/ul8Bx0/fgXonFy6XXTsc3ITSApwJOKTwtJJ4cpAGnFzAySTUtbK+k4hs6r0TCXcjAZxIwMkk7G1W/HK5dyJ7YgEnFnDy2Q0rdZ/1JFEjtgpnAk48zJxM7h4rh1MB1daSRXWO4BQG3BbOUIlTeLS2cLZXI3yiQ7OoFPfgXk5ICZxUwMkV6shdz9o08GPB8iqcFn5mGji55BBuWFGiQ1D+N3OP7JTCyZPBKeh0jpOHahAnolOBk/4697DOasGZgJPIe+4ig+N9uRscMUZK6tCp0z7O+lqEv/ikx30o7jGdlp0CTyzLHeAM5vQ4eHL1hrO+WRA48Zbx+HsWcEgOJ0JUAbV+M/dwzk+PLYlzSKddHCGilzzAUQn6ZtNaHPMt7eKYTf0VHBf3QC4JOJnoKKdgcU6z7b/IPY7rskBT7MrnYNxDuDB7ngAnXmQZAY4rtsoCxwWcSGJ9pRs4pbadq2p15j7sN2U+BaN2X+c+6rf1zNLMfczvq3BDGqmxJ7vyba/DAMfldi71VE+FThc4kfL35mvcR8kUJdAve07mI/aA49oRAWer8DavBt5N+nLAQQghhBBCCCGEEEIIoW8KT+Cmw9PbmfA6QKYUTrdEpdfXup4/wIl2iAU4uR/xXl/s5z7at7WfGsBxFXC8N1m5t4lwH/T1HZkt4x6nj3fNpHBKb9IDTtc4xYU3cioFcQ/huo7ipGZOyzjxRZgSlHEa3bNSO1RhtQlx2tzSj+NM+xxRmzjJj8nqGyd5yVc28W22q2XuIZ0XcDIl7xX6xjnKAhzg+AEnyICYvxdUMhpRH9kIzqENCjjAIQEnE3Ay5XFkrzgVc+YJHMUj159W5R5qfRfjjMABTu0JNW1LDnDSNsBpC6ewfdNPfawl0cmvlRkuwzEuu/8/mXu0lZ2Ns51/Ejg+i2cjv3uTGs7GoTRfPWdMJ+DsVTwc7hG+UMUmrk4a9UHFU/Cn25dGeoPp4h7hC9Xg5KP/DjgxFfvPusCR6+kSekRw3MOMo6CPzTu+lyouyOE0Sn2VPlB/OMmTiOJEHvvdI/oPBFxR1+9R0sAAAAAASUVORK5CYII=",
    },
];

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <h2>Latest Insights from MarketGenie</h2>
                <div className="blog-cards">
                    {blogs.map((blog, i) => (
                        <div key={i} className="blog-card">
                            <img src={blog.image} alt={blog.title} className="blog-img" />
                            <div className="blog-content">
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <div className="blog-meta">
                                    <div className="author-avatar">{blog.author[0]}</div>
                                    <div className="author-info">
                                        <span className="author-name">{blog.author}</span>
                                        <span className="blog-date">{blog.date}</span>
                                    </div>
                                    <a href="#" className="read-more">
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;