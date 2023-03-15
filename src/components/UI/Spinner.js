import classes from '../styles/spinner.module.css'

const Spinner = () => {
  return (
    <div className={classes['spinner-container']}>
      <div className={classes.loadingSpinner}>
      </div>
    </div>
  );
}
export default Spinner

