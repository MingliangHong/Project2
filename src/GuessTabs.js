import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slick_tabm from './Slick_tabm';
import Slick_tabtv from './Slick_tabtv';
const GuessTabs = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Movies</Tab>
                <Tab>TV</Tab>
                <Tab disabled>GAMES</Tab>
            </TabList>

            <TabPanel>
                <Slick_tabm></Slick_tabm>
            </TabPanel>
            <TabPanel>
                <Slick_tabtv></Slick_tabtv>
            </TabPanel>

        </Tabs>
    );
}
 
export default GuessTabs;
