import React from 'react';
import { Epic, Tabbar, TabbarItem, View, Panel, PanelHeader, ConfigProvider } from '@vkontakte/vkui';

import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28MagicWandOutline from '@vkontakte/icons/dist/28/magic_wand_outline';
import Icon28StatisticsOutline from '@vkontakte/icons/dist/28/statistics_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import CardEvent from './components/CardEvent';
import ApiNative from './components/ApiNative';

class App extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'home'
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
  
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}
  
	render () {
  
	  return (
		<Epic activeStory={this.state.activeStory} tabbar={
		  <Tabbar>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'home'}
			  data-story="home"
			  text="Главная"
			><Icon28HomeOutline /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'achievements'}
			  data-story="achievements"
			  label="12"
			  text="Достижения"
			><Icon28MagicWandOutline /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'statistics'}
			  data-story="statistics"
			  text="Рейтинг"
			><Icon28StatisticsOutline /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'market'}
			  data-story="market"
			  text="Магазин"
			><Icon28MarketOutline /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'more'}
			  data-story="more"
			  text="Ещё"
			><Icon28More /></TabbarItem>
		  </Tabbar>
		}>
		  <View id="home" activePanel="home">
			<Panel id="home">
			  <PanelHeader>Главная</PanelHeader>
			  <ApiNative />
			  <CardEvent />
			</Panel>
		  </View>
		  <View id="achievements" activePanel="achievements">
			<Panel id="achievements">
			  <PanelHeader>Достижения</PanelHeader>
			</Panel>
		  </View>
		  <View id="statistics" activePanel="statistics">
			<Panel id="statistics">
			  <PanelHeader>Рейтинг</PanelHeader>
			</Panel>
		  </View>
		  <View id="market" activePanel="market">
			<Panel id="market">
			  <PanelHeader>Магазин</PanelHeader>
			</Panel>
		  </View>
		  <View id="more" activePanel="more">
			<Panel id="more">
			  <PanelHeader>Ещё</PanelHeader>
			</Panel>
		  </View>
		</Epic>
	  )
	}
  }


export default App;