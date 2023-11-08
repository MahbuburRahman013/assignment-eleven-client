

const FaqSection = () => {
    return (
        <div className="py-10 mb-20 flex-col flex lg:flex-row items-center container mx-auto">
            <div>
                <img src="https://i.ibb.co/kcT22Nf/image2-removebg-preview.png" alt="" />
            </div>
          <div className="flex-1">

          <div tabIndex={0} className="collapse collapse-arrow shadow">
                <div className="collapse-title text-xl font-medium">
                1. What is Online Group Study?
                </div>
                <div className="collapse-content">
                    <p>Online Group Study is a collaborative learning platform that enables students and learners to join virtual study groups, interact with peers, and study together in a digital environment.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow shadow ">
                <div className="collapse-title text-xl font-medium">
                2. How do I get started with Online Group Study?
                </div>
                <div className="collapse-content">
                    <p> To get started, simply sign up for an account, create or join a study group, and start collaborating with fellow learners. You can find detailed instructions in our Getting Started guide.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow  shadow">
                <div className="collapse-title text-xl font-medium">
                3. Is Online Group Study free to use?
                </div>
                <div className="collapse-content">
                    <p> Yes, Online Group Study offers a free basic plan that allows you to access and use essential features. We also offer premium plans with additional features for those who want an enhanced experience.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow  shadow">
                <div className="collapse-title text-xl font-medium">
                4. How do I create a study group?
                </div>
                <div className="collapse-content">
                    <p> To create a study group, log in to your account, go to the dashboard, and select Create Study Group. You can set the groups name, description, and privacy settings, and invite members to join.</p>
                </div>
            </div>
            <div tabIndex={4} className="collapse collapse-arrow  shadow">
                <div className="collapse-title text-xl font-medium">
                5. Can I invite friends to join my study group?
                </div>
                <div className="collapse-content">
                    <p> Absolutely! You can invite friends or classmates to your study group by sending them an invitation link or sharing the group code.</p>
                </div>
            </div>
            <div tabIndex={5} className="collapse collapse-arrow shadow ">
                <div className="collapse-title text-xl font-medium">
                6. How do I schedule study sessions within a group?
                </div>
                <div className="collapse-content">
                    <p> As a group admin, you can schedule study sessions in the group calendar, and all group members will receive notifications. You can customize session details like date, time, and agenda.</p>
                </div>
            </div>

          </div>
        </div>
    );
};

export default FaqSection;