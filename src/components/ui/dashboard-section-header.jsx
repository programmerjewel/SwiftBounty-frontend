import PropTypes from 'prop-types';

const DashboardSectionHeader = ({
  title, subtitle, titleSize = "text-3xl", subtitleSize = "text-md", className = "",
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className={`${titleSize} font-bold tracking-tight mb-2`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleSize} text-muted-foreground mt-1`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

DashboardSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  titleSize: PropTypes.string,
  subtitleSize: PropTypes.string,
  className: PropTypes.string
};

export default DashboardSectionHeader;