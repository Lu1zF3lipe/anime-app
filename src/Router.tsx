import { HomePage } from "./screens/home";
import { Home, User, LayoutGrid, Bookmark, Search  } from 'lucide-react-native';
import { TestesPage } from "./screens/testes";

type TabInfoOptions = {
    tabBarIcon: (params: any) => any;
    tabBarActiveTintColor: string;
    tabBarInactiveTintColor: string;
    tabBarActiveBackgroundColor: string;
    tabBarInactiveBackgroundColor: string;
  }

type TabInfo = {
    name: string;
    component: any,
    options?: Partial<TabInfoOptions>
  }

type TabRootParamList = {
    [key: string]: TabInfo
}

export const Tabs: TabRootParamList = {
    Home: {
        name: "Home",
        component: HomePage,
        options: {
            tabBarIcon: ({ color, size }) => <Home color={color} size={size}/>,
        }
    },
    Profile: {
        name: "Profile",
        component: TestesPage,
        options: {
            tabBarIcon: ({ color, size }) => <User color={color} size={size}/>
        }
    },
    SearchPage: {
        name: "SearchPage",
        component: HomePage,
        options: {
            tabBarIcon: ({ color, size }) => <Search color={color} size={size}/>,
      }
    },
    Favorite: {
        name: "Favorite",
        component: HomePage,
        options: {
            tabBarIcon: ({ color, size }) => <Bookmark color={color} size={size}/>,
        }
    },
    Catalog: {
        name: "Catalog",
        component: HomePage,
        options: {
            tabBarIcon: ({ color, size }) => <LayoutGrid color={color} size={size}/>,
      }
    }
}
