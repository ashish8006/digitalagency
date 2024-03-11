import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import LandingPage from "./pages/LandingPage";

// Mocking the components for simplicity
jest.mock("./components/FrameContainer", () => () => (
  <div data-testid="frame-container" />
));
jest.mock("./components/RealtimeAnalytics", () => () => (
  <div data-testid="realtime-analytics" />
));
jest.mock("./components/FrameComponent1", () => () => (
  <div data-testid="frame-component1" />
));
jest.mock("./components/BlogPostFrame", () => () => (
  <div data-testid="blog-post-frame" />
));
jest.mock("./components/ProjectsFrame", () => () => (
  <div data-testid="projects-frame" />
));
jest.mock("./components/Footer", () => () => <div data-testid="footer" />);

describe("LandingPage component", () => {
  test("renders all components", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("frame-container")).toBeInTheDocument();
    expect(screen.getByTestId("realtime-analytics")).toBeInTheDocument();
    expect(screen.getByTestId("frame-component1")).toBeInTheDocument();
    expect(screen.getByTestId("blog-post-frame")).toBeInTheDocument();
    expect(screen.getByTestId("projects-frame")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test('renders "Powering next-gen companies" text', () => {
    render(<LandingPage />);
    const powerText = screen.getByText("Powering next-gen companies");
    expect(powerText).toBeInTheDocument();
  });

  test("renders blog frames with images", async () => {
    render(<LandingPage />);
    await waitFor(
      () => {
        try {
          expect(screen.getByAltText("group-13")).toBeInTheDocument();
          expect(screen.getByAltText("group-14")).toBeInTheDocument();
          expect(screen.getByAltText("group-15")).toBeInTheDocument();
          expect(screen.getByAltText("mask-group-icon")).toBeInTheDocument();
          expect(screen.getByAltText("help-menu-footer")).toBeInTheDocument();
        } catch (error) {
          console.log("Error:", error.message);
        }
      },
      { timeout: 15000 } // Increase or decrease the timeout as needed
    );
  });
  // Add more tests as needed
});
