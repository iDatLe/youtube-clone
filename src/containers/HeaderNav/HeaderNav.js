import React from 'react';
import {Image, Menu, Form, Input, Icon} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

function HeaderNav() {
    return (
        // The icon 
        <Menu borderless className='top-menu' fixed='top'> 
            {/* Borderless will remove the vertical line that would otherwise be there */}
            <Menu.Item header className='logo'>
                <Link to='/'><Image src={logo} size='tiny'/></Link>
            </Menu.Item>

            {/* The search bar */}
            <Menu.Menu className='nav-container'>
                <Menu.Item className='search-input'>
                    <Form>
                        <Form.Field>
                            <Input 
                                placeholder='search'
                                size='small'
                                action='Go'
                                />
                        </Form.Field>
                    </Form>
                </Menu.Item>

                {/* The icons contained on the right side of navbar*/}
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon className='header-icon' name='video camera' size='large'/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon className='header-icon' name='grid layout' size='large'/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon className='header-icon' name='chat' size='large'/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon className='header-icon' name='alarm' size='large'/>
                    </Menu.Item>
                    <Menu.Item name='avatar'>
                        <Image src='http://via.placeholder.com/80x80' avatar/>
                    </Menu.Item>
                </Menu.Menu>

            </Menu.Menu>
        </Menu>
    )
}

export default HeaderNav;