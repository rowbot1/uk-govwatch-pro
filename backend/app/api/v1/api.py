from fastapi import APIRouter
from app.api.v1.endpoints import auth, users, business_profiles, opportunities, subscriptions

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(business_profiles.router, prefix="/business-profiles", tags=["business profiles"])
api_router.include_router(opportunities.router, prefix="/opportunities", tags=["opportunities"])
api_router.include_router(subscriptions.router, prefix="/subscriptions", tags=["subscriptions"])