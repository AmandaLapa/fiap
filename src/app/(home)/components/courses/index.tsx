"use client";

import React from "react";
import * as S from "./styles";
import CustomCursor from "@/ui/components/CustomCursor";
import { useCourses, TabData } from "./useCourses";

const Courses = () => {
	const tabsData: TabData[] = [
		{
			id: "tecnologia",
			title: "Tecnologia",
			items: [
				{
					title: "Big Data Ecosystem",
					description: "remoto • live",
				},
				{
					title: "Creating Dashboards for BI",
					description: "remoto • live + multimídia",
				},
				{
					title: "Big Data Science - Machine Learning & Data Mining",
					description: "remoto • live",
				},
				{
					title: "Storytelling",
					description: "remoto • live + multimídia",
				},
			],
		},
		{
			id: "inovacao",
			title: "Inovação",
			items: [
				{
					title: "UX",
					description: "remoto • live",
				},
				{
					title: "UX Writing",
					description: "remoto",
				},
				{
					title: "Chatbots",
					description: "remoto • live + multimídia",
				},
			],
		},
		{
			id: "negocios",
			title: "Negócios",
			items: [
				{
					title: "Agile Culture",
					description: "live",
				},
				{
					title: "DPO Data Protection Officer",
					description: "remoto • live",
				},
				{
					title: "IT Business Partner",
					description: "remoto • live + multimídia",
				},
				{
					title: "Perícia Forense Computacional",
					description: "remoto • live + multimídia",
				},
				{
					title: "Growth Hacking",
					description: "remoto",
				},
			],
		},
	];

	const {
		activeTab,
		animatingOut,
		cursor,
		activeTabData,
		isMobile,
		expandedTab,
		handleTabChange,
		handleMobileToggle,
	} = useCourses(tabsData);
	return (
		<React.Fragment>
			{cursor.isActive && (
				<CustomCursor
					isActive={cursor.isActive}
					position={cursor.position}
					size="small"
				/>
			)}

			<S.Section
				onMouseEnter={cursor.handlers.onMouseEnter}
				onMouseLeave={cursor.handlers.onMouseLeave}
			>
				<S.SectionContainer>
					<S.SectionMain>
						<S.SectionHeading>
							<S.SectionTitle>Cursos</S.SectionTitle>
							<S.SectionDescription>
								Cursos de Curta Duração
							</S.SectionDescription>
						</S.SectionHeading>

						{!isMobile && (
							<S.SectionTabs>
								{tabsData.map((tab) => (
									<S.SectionTab
										key={tab.id}
										$isActive={activeTab === tab.id}
										onClick={() => handleTabChange(tab.id)}
										aria-label={tab.title}
									>
										{tab.title}
									</S.SectionTab>
								))}
							</S.SectionTabs>
						)}
					</S.SectionMain>

					<S.SectionContent>
						{!isMobile ? (
							activeTabData && (
								<S.SectionPane>
									<S.SectionPaneTitle
										key={`title-${activeTab}`}
										$animatingOut={animatingOut}
									>
										{activeTabData.title}
									</S.SectionPaneTitle>
									<S.SectionPaneList>
										{activeTabData.items.map(
											(item, index) => (
												<S.SectionPaneItem
													key={`${activeTab}-${index}`}
													$animatingOut={animatingOut}
													$delay={index * 100}
												>
													<S.SectionPaneItemTitle>
														{item.title}
													</S.SectionPaneItemTitle>
													<S.SectionPaneItemDescription>
														{item.description}
													</S.SectionPaneItemDescription>
												</S.SectionPaneItem>
											),
										)}
									</S.SectionPaneList>
								</S.SectionPane>
							)
						) : (
							<S.SectionPane>
								{tabsData.map((tab) => (
									<div key={tab.id}>
										<S.SectionPaneTitle
											onClick={() =>
												handleMobileToggle(tab.id)
											}
											$isMobile={true}
											$isExpanded={expandedTab === tab.id}
										>
											{tab.title}
											<S.SectionPaneIcon
												$isExpanded={
													expandedTab === tab.id
												}
											>
												{expandedTab === tab.id
													? "-"
													: "+"}
											</S.SectionPaneIcon>
										</S.SectionPaneTitle>
										{expandedTab === tab.id && (
											<S.SectionPaneList>
												{tab.items.map(
													(item, index) => (
														<S.SectionPaneItem
															key={`${tab.id}-${index}`}
															$delay={index * 100}
														>
															<S.SectionPaneItemTitle>
																{item.title}
															</S.SectionPaneItemTitle>
															<S.SectionPaneItemDescription>
																{
																	item.description
																}
															</S.SectionPaneItemDescription>
														</S.SectionPaneItem>
													),
												)}
											</S.SectionPaneList>
										)}
									</div>
								))}
							</S.SectionPane>
						)}
					</S.SectionContent>
				</S.SectionContainer>
			</S.Section>
		</React.Fragment>
	);
};

export default Courses;
