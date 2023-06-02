import '../styles/filter.css';


export const CourseFilter = (props) => {
	return (
        <div className="article-list">
            {props.articles["courses"].map(article => (
                <div className="article-container" key={article.id}>
                    <div className="img-container">
                        <img src={article.urlImage} alt={article.name} />
                    </div>
                    <div className="article-body">
                        <h2>{article.name}</h2>
                        <p>{article.description}</p>
                        <div className="article-footer">
                            <span>{article.language} · </span>
                            <span>{article.language}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};