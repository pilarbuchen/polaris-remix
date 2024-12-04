import React, { useState } from 'react';
import { Card, Text, BlockStack, InlineGrid, Link, Divider } from '@shopify/polaris';
import styles from './my-polaris-component.module.scss';

export const MyPolarisComponent: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <section className={styles['my-polaris-container']}>
            <BlockStack gap="800">
                <section className={styles.header}>
                    <InlineGrid gap="400" columns={2}>
                        <Text variant="headingXl" as="h1">
                            My Company
                        </Text>
                        <nav className={styles['nav-links']}>
                            <Link url="#">Home</Link>
                            <Link url="#">About</Link>
                            <Link url="#">Services</Link>
                            <Link url="#">Contact</Link>
                        </nav>
                    </InlineGrid>
                </section>

                <Card>
                    <BlockStack gap="400" align="center">
                        <Text variant="heading2xl" as="h2">
                            Welcome to Our Platform
                        </Text>
                        <Text variant="bodyLg" as={'dd'} >Discover amazing features and services</Text>
                        <Link url="#" monochrome>
                            Get Started
                        </Link>
                    </BlockStack>
                </Card>

                <BlockStack gap="400">
                    <Text variant="headingLg" as="h3">
                        Our Features
                    </Text>
                    <InlineGrid gap="400" columns={3}>
                        {['Feature 1', 'Feature 2', 'Feature 3'].map((feature) => (
                            <Card key={feature}>
                                <BlockStack gap="200">
                                    <Text as={'dd'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Text>
                                </BlockStack>
                            </Card>
                        ))}
                    </InlineGrid>
                </BlockStack>

                <Card>
                    <BlockStack gap="400">
                        <Text variant="headingMd" as="h3">
                            Contact Us
                        </Text>
                        <section className={styles['contact-form']}>
                            <BlockStack gap="300">
                                <Text as={'dd'} >
                                    Your Message
                                </Text>
                                <input
                                    id="message"
                                    type="text"
                                    value={inputValue}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        setInputValue(e.target.value)
                                    }
                                    placeholder="Type your message..."
                                    className={styles['Polaris-TextField__Input']}
                                />
                                <Link url="#" monochrome>
                                    Send Message
                                </Link>
                            </BlockStack>
                        </section>
                    </BlockStack>
                </Card>

                <footer className={styles.footer}>
                    <Divider />
                    <BlockStack gap="400">
                        <Text variant="bodySm" alignment="center" as={'dd'}>
                            © 2024 My Company. All rights reserved.
                        </Text>
                    </BlockStack>
                </footer>
            </BlockStack>
        </section>
    );
};
