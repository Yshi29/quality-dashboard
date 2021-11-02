import DashboardIcon from "./assets/DashboardIcon.svg";
import DashboardIconActive from "./assets/DashboardIconActive.svg";
import AccountsIcon from "./assets/AccountsIcon.svg";
import AccountsIconActive from "./assets/AccountsIconActive.svg";
import TransactionsIcon from "./assets/TransactionsIcon.svg";
import TransactionsIconActive from "./assets/TransactionsIconActive.svg";
import SettingsIcon from "./assets/SettingsIcon.svg";
import SettingsIconActive from "./assets/SettingsIconActive.svg";
import SecureIcon from "./assets/SecureIcon.svg";
import SecureIconActive from "./assets/SecureIconActive.svg";
import SignOutIcon from "./assets/SignOutIcon.svg";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import Secure from "./pages/Secure";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";

const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: DashboardIcon,
    activeIcon: DashboardIconActive,
    component: Dashboard,
  },
  {
    label: "Accounts",
    path: "/accounts",
    icon: AccountsIcon,
    activeIcon: AccountsIconActive,
    component: Accounts,
  },
  {
    label: "Transactions",
    path: "/transcations",
    icon: TransactionsIcon,
    activeIcon: TransactionsIconActive,
    component: Transactions,
  },
  {
    label: "Secure",
    path: "/Secure",
    icon: SecureIcon,
    activeIcon: SecureIconActive,
    component: Secure,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIconActive,
    component: Settings,
  },
  {
    label: "Sign Out",
    path: "/sign-out",
    icon: SignOutIcon,
    activeIcon: SignOutIcon,
  },
];

export default routes;
