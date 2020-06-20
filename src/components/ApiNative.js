import React from 'react';
import connect from '@vkontakte/vk-bridge';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
//import fetchJsonp from 'fetch-jsonp';
import Account from "./Account";

class ApiNative extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'Account',
			fetchedUser: null,
			authToken : null,
			Users : []
		};

		this.getUsers = this.getUsers.bind(this)
	}

	componentDidMount() {
		connect.subscribe((e) => {
			if (e.detail.hasOwnProperty('type')) {
				switch (e.detail.type) {
					case 'VKWebAppGetUserInfoResult':
						this.setState({ fetchedUser: e.detail.data });
						break;
					case 'VKWebAppAccessTokenReceived':
						this.setState({
							token: e.detail.data.access_token
						});
						this.getUsers();
						break;
					default:
						break;
				}
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	getToken = () => {
		connect.send("VKWebAppGetAuthToken", {"app_id": 7516501});
	}

	getUsers() {
		connect.send("VKWebAppCallAPIMethod", {
			'method': "users.get",
			'request_id': '324nnefj',
			"params": {
				"user_ids": "1,2,3",
				"access_token": this.state.token,
			}
		});
	}

	go = (e) => {
		const route = e.currentTarget.dataset.to;
		this.setState({ activePanel: route })
		this.setLocation(route)
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Account id="Account" user={this.state.fetchedUser} getToken={this.getToken} token={this.state.token} go={this.go} />
			</View>
		);
	}
}

export default ApiNative;