import { Avatar } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import defaultUserImg from '../../assets/images/default-user.png';
import { ROUTES } from '../../constants/routes';
import { AccountContext } from '../../contexts/AccountContext';
import useStyles from '../../styles/AccountLogin';

function AccountLogin() {
	const classes = useStyles();
	const { isAuth, fullname, avt } = useContext(AccountContext);
	const avtSrc = avt !== '' ? avt : defaultUserImg;

	return (
		<div className={`${classes.accountWrap} flex-center flex-col`}>
			{isAuth ? (
				<>
					<Avatar
						src={avtSrc}
						alt={fullname}
						sx={{ width: '48px', height: '48px', mb: '0.5rem' }}
					/>
					<p className={classes.name}>{fullname}</p>
				</>
			) : (
				<Link to={ROUTES.LOGIN} className={classes.loginBtn}>
					Login
				</Link>
			)}
		</div>
	);
}

export default AccountLogin;
