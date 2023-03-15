import classes from '../styles/table.module.css'

const Similarity = ({ similarity, amazonUrl }) => {

    return (
      <div className={classes.tableWrapper}>
        <div>
          <a href={amazonUrl} target="_blank" rel='noreferrer'>{amazonUrl}</a>
          {similarity?.map(url => {
            return (
              <div>
                <a href={url.alibabaSourceLink} target={"_blank"} rel='noreferrer'>{url.alibabaSourceLink}</a>
                <div>{url.similarity}</div>
              </div>)
          })}
        </div>
      </div>
    );
  }
export default Similarity