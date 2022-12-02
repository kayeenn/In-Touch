import Header from "../../components/header/Header";
import Profile_header from "../../components/profile_header/Profile_header";
import About_me from "../../components/about_me/About_me";
import Recom_channel from "../../components/recommended_channels/Recom_channel";
import Profile_posts from "../../components/profile_posts/Profile_posts";
import Might_know from "../../components/might_know/Might_know";
import Whats_new from "../../components/whats_new/Whats_new";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Header />
      <Profile_header />
      <About_me />
      <Whats_new />
      <div className="Main">
        <Recom_channel />
        <Profile_posts />

        <Might_know />
      </div>
    </>
  );
}
