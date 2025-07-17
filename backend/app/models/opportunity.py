from sqlalchemy import Column, String, Integer, DateTime, Text, JSON, Float, Boolean
from sqlalchemy.sql import func
from app.core.database import Base

class Opportunity(Base):
    __tablename__ = "opportunities"
    
    id = Column(Integer, primary_key=True, index=True)
    external_id = Column(String, unique=True, index=True)  # ID from source system
    
    # Basic Information
    title = Column(String, nullable=False)
    description = Column(Text)
    source = Column(String, nullable=False)  # contracts_finder, council_name, etc.
    source_url = Column(String)
    
    # Classification
    opportunity_type = Column(String)  # contract, grant, framework, quotation
    category = Column(String)  # IT, construction, professional services, etc.
    sectors = Column(JSON)  # List of sector codes
    cpv_codes = Column(JSON)  # Common Procurement Vocabulary codes
    
    # Location
    location = Column(String)
    postcode = Column(String)
    region = Column(String)
    is_national = Column(Boolean, default=False)
    
    # Financial
    value_low = Column(Float)
    value_high = Column(Float)
    currency = Column(String, default="GBP")
    
    # Dates
    published_date = Column(DateTime(timezone=True))
    deadline = Column(DateTime(timezone=True))
    start_date = Column(DateTime(timezone=True))
    end_date = Column(DateTime(timezone=True))
    
    # Requirements
    requirements = Column(JSON)  # List of requirements
    certifications_required = Column(JSON)  # List of required certifications
    
    # Metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    is_active = Column(Boolean, default=True)
    
    # Search
    search_vector = Column(Text)  # For full-text search