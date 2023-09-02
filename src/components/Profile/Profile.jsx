import PropTypes from 'prop-types';
import {
    ProfileCard,
    Description,
    IconAvatar,
    Name,
    Tag,
    Location,
    Stats,
    Quantity,
    Label,
} from './Profile.styled';

const Profile = ({
    user: {
        username,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    },
}) => {
    return (
        <ProfileCard>
            <Description>
                <IconAvatar src={avatar} alt="User avatar" />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <Stats className="stats">
                <li>
                    <Label className="label">Followers </Label>
                    <Quantity className="quantity">{followers}</Quantity>
                </li>
                <li>
                    <Label className="label">Views </Label>
                    <Quantity className="quantity">{views}</Quantity>
                </li>
                <li>
                    <Label className="label">Likes </Label>
                    <Quantity className="quantity">{likes}</Quantity>
                </li>
            </Stats>
        </ProfileCard>
    );
};

Profile.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.objectOf(PropTypes.number).isRequired,
    }).isRequired,
};

export default Profile;
