import React from 'react';
import PropTypes from 'prop-types';
// import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Panel, Cell, List, PanelHeader, Group, Div, Avatar } from '@vkontakte/vkui';

class Account extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//fetchedUser: null,
			UsersFt: null
		};
	}
	componentDidMount() {
		this.props.getToken();
	}

	render() {
		const props = this.props;
		const userpr = props.user;
		console.log(props.user);
		return (
			<Panel id={props.id}>
				<Group>
				{userpr && <Cell
					before={userpr.photo_200 ? <Avatar src={userpr.photo_200}/> : null}
					description={userpr.city && userpr.city.title ? userpr.city.title : ''}
					>
					{`${userpr.first_name} ${userpr.last_name}`}
					</Cell>};
				</Group>
			</Panel>
		);
	}
}

Account.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Account;
/*const Account = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		
		{fetchedUser &&
		<Group>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
	</Panel>
);

Account.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Account;*/
